import lozad from 'lozad';

const loadImageBg = (element: any) => {
    element.setAttribute('style', 'background-image: url(' + element.getAttribute('data-arzload-bg') + ');' + element.getAttribute('data-arzload-style'));
};

const lazyLoadImagesBackground = () => {
    return lozad('.lazyloadBg', {
        rootMargin: '160px 160px 160px 160px',
        threshold: 0.016,
        load: async (element: any) => {
            loadImageBg(element);
        },
    });
};

const lazyLoadImagePicAndImg = () => {
    return lozad('.lazyloadPicImg', {
        rootMargin: '160px 160px 160px 160px',
        threshold: 0.016,
    });
};

export const LazyLoadImages = () => {
    lazyLoadImagesBackground().observe();
    lazyLoadImagePicAndImg().observe();
};
