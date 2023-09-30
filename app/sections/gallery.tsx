import GalleryItem from "../components/galleryItem";

async function Gallery() {

    const data = await getData();
    const arranged: any = rearrange(data.items);

    return (
        <div className="min-h-screen p-6 text-center">
            <div className="columns-lg gap-2 max-w-screen-xl mx-auto">
                {
                    Object.keys(arranged).map((mainFolder) => {
                        return Object.keys(arranged[mainFolder]).map((folder, index) => {
                            const images: string[] = Array.from(arranged[mainFolder][folder]);
                            const raw = images.find((image: string) => image.toLowerCase().includes('.raw') || image.includes('.dng'));
                            const rawPath = raw ? `${mainFolder}%2F${folder}%2F${raw}?alt=media` : undefined;
                            const thumbnails = `${mainFolder}%2F${folder}%2F${(images.filter((image: string) => image !== raw)[0])}?alt=media`;
                            return (
                                <div key={index} className="block pt-2">
                                    <GalleryItem thumbnail={thumbnails} raw={rawPath ? rawPath : undefined} />
                                </div>
                            )
                        })
                    })
                }
            </div></div>)
}

async function getData() {
    const res = await fetch('https://firebasestorage.googleapis.com/v0/b/obsek-gallery.appspot.com/o/')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

function rearrange(data: Array<any>) {
    if (!data) return;

    let arranged: {
        [key: string]: {
            [key: string]: Set<string>
        }
    } = {};

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const [mainFolder, folder, name] = element.name.split('/');

        if (!arranged[mainFolder]) {
            arranged[mainFolder] = {};
        }

        if (!arranged[mainFolder][folder]) {
            arranged[mainFolder][folder] = new Set();
        }

        arranged[mainFolder][folder].add(name);
    }

    return arranged;
}

export default Gallery;