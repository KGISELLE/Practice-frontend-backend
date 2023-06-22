interface CardProps {
    cardTitle: string,
    balance: string
}

const Card = ({ cardTitle, balance }: CardProps) => {
    return (
      <div>
        <div
          style={{
            flexDirection: "row",
            backgroundColor: "#646CFF",
            color: "white",
            padding: "10px",
            width: "100%",
            justifyContent: "space-between",
            borderBottomColor: "#f1f1f1",
            borderBottomWidth: 1,
            borderRadius: 20,
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
          }}
        >
          <div style={{ paddingTop: 10 }}>
            <h3>{cardTitle}</h3>
            <p style={{ color: "gold", fontSize: "20px", fontWeight: "bold", fontStyle: "italic"}}>{balance}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;