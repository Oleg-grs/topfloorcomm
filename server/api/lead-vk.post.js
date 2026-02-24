import qs from 'qs'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const body = await readBody(event)

    const name = body?.name || '—'
    const phone = body?.phone || '—'
    const area = body?.area || '—'
    const service = body?.service || '—'

    const messageText =
        `✅ Новая заявка с сайта\n` +
        `Имя: ${name}\n` +
        `Телефон: ${phone}\n` +
        `Площадь: ${area}\n` +
        `Услуга: ${service}`

    const peerId = Number(config.vkPeerId)
    const randomId = Math.floor(Math.random() * 2_000_000_000)

    const payload = qs.stringify({
        access_token: config.vkToken,
        v: config.vkApiVersion, // например '5.199'
        peer_id: peerId,
        random_id: randomId,
        message: messageText
    })

    try {
        const vkRes =  await $fetch('https://api.vk.com/method/messages.send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: payload
        })

        console.log('VK RESPONSE:', JSON.stringify(vkRes))

        if (vkRes.error) {
            console.error('VK ERROR:', vkRes.error)
            throw createError({
                statusCode: 500,
                statusMessage: `VK error: ${vkRes.error.error_code} ${vkRes.error.error_msg}`
            })
        }

        return { success: true, message: 'Заявка получена' }
    } catch (error) {
        console.error('Ошибка отправки:', error)
        throw createError({ statusCode: 500, statusMessage: 'Ошибка при отправке заявки' })
    }
})
