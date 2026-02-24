// Reusable BookCard Component
function BookCard({ title, author, image }) {
  return (
    <div
    
      style={{
      
 
 
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "20px",
  width: "260px",
  height: "420px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"


      }}
    >
      <img
        src={image}
        alt={title}
        width="150"
        height="200"
        style={{

  width: "150px",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "15px"


    }}
      />

    <h3 style={{ margin: "5px 0", textAlign: "center" }}>
  Title: {title}
</h3>

<p style={{ margin: "0", textAlign: "center" }}>
  Author: {author}
</p>
    </div>
  );
}

// Parent Component
export default function Page() {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg"
    },
    {
      title: "1984",
      author: "George Orwell",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
    
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400"
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#ebbfaf"
      }}
    >
      <div
        style={{
          
  display: "flex",
  gap: "30px",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center"

        }}
      >
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}