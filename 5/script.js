class ImageItem {
    constructor(url) {
        this.url = url;
    }

    createImageElement() {
        const div = document.createElement('div');
        div.classList.add('image-item');

        const img = document.createElement('img');
        img.src = this.url;
        img.alt = 'Imagen';

        div.appendChild(img);
        return div;
    }
}

class Gallery {
    constructor() {
        this.images = [];
        this.galleryElement = document.getElementById('gallery');
    }

    addImage(url) {
        const newImage = new ImageItem(url);
        this.images.push(newImage);
        this.render();
    }

    render() {
        this.galleryElement.innerHTML = '';
        this.images.forEach(image => {
            this.galleryElement.appendChild(image.createImageElement());
        });
    }
}

class ThemedGallery extends Gallery {
    constructor() {
        super();
        this.isDarkTheme = false;
        this.toggleThemeBtn = document.getElementById('toggleThemeBtn');
        this.toggleThemeBtn.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        document.body.classList.toggle('dark-theme', this.isDarkTheme);
        document.body.classList.toggle('light-theme', !this.isDarkTheme);
    }
}

const gallery = new ThemedGallery();

document.getElementById('addImageBtn').addEventListener('click', () => {
    const imageUrl = document.getElementById('imageUrl').value;
    if (imageUrl) {
        gallery.addImage(imageUrl);
        document.getElementById('imageUrl').value = '';
    } else {
        alert('Por favor, introduce una URL válida.');
    }
});
