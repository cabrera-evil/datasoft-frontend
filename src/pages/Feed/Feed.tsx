import FeedItem from "./components/FeedItem/FeedItem";

export default function Feed() {
  // Supongamos que tienes un array de datos que representan tus elementos.
  const feedItemsData = [
    { imageSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png", category: "Indoor", name: "Peace Lily", price: 36.00 },
    { imageSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png", category: "Indoor", name: "Peace Lily", price: 36.00 },
    { imageSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png", category: "Indoor", name: "Peace Lily", price: 36.00 },
    { imageSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png", category: "Indoor", name: "Peace Lily", price: 36.00 },
    { imageSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png", category: "Indoor", name: "Peace Lily", price: 36.00 },
    { imageSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png", category: "Indoor", name: "Peace Lily", price: 36.00 },
    { imageSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png", category: "Indoor", name: "Peace Lily", price: 36.00 },
    { imageSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png", category: "Indoor", name: "Peace Lily", price: 36.00 },
    { imageSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png", category: "Indoor", name: "Peace Lily", price: 36.00 },
    { imageSrc: "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png", category: "Indoor", name: "Peace Lily", price: 36.00 },
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {feedItemsData.map((item, index) => (
        <FeedItem
          key={index}
          imageSrc={item.imageSrc}
          category={item.category}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}
