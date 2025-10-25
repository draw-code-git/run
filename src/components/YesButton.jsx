function YesButton({ onClick }){
  return(
    <button
      onClick={onClick}
      style={{
        padding: "14px 24px",
        fontSize: "32px",
        borderRadius: "12px",
        background: "#ff5a5f",
        color: "white",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        margin: "5px"
      }}>Yes❤️</button>
  )
}

export default YesButton;