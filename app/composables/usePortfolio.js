export const usePortfolio = () => {
    const portfolioItems = [
        {
            id: 'case-1',
            title: 'Топпинг',
            description: 'Полы c топинговым покрытием',
            image: '/images/topping/1.webp',
            images: [
                '/images/topping/2.webp',
                '/images/topping/3.webp',
                '/images/topping/4.webp',
                '/images/topping/5.webp',
                '/images/topping/6.webp',
                '/images/topping/7.webp',
            ],
        },
        {
            id: 'case-2',
            title: 'Армирование',
            description: 'Услуги по армированию',
            image: '/images/reinforcement/1.webp',
            images: [
                '/images/reinforcement/2.webp',
                '/images/reinforcement/3.webp',
                '/images/reinforcement/4.webp',
                '/images/reinforcement/5.webp',
                '/images/reinforcement/6.webp',
                '/images/reinforcement/7.webp',
            ],
        },
        {
            id: 'case-3',
            title: 'Полимерные полы',
            description: 'Услуги по устройству полимерных полов',
            image: '/images/polymer/1.webp',
            images: [
                '/images/polymer/2.webp',
                '/images/polymer/3.webp',
                '/images/polymer/4.webp',
                '/images/polymer/5.webp',
                '/images/polymer/6.webp',
                '/images/polymer/7.webp',
            ],
        },
    ];

    return {
        portfolioItems,
    };
};
