import "./StatCard.css"


type StatCardProps = {
    title:string,
    value: string|number
    image:string
   
}

export default function StatCard({title,value,image}:StatCardProps) {



  return (
    <section className="stat-card">
      {image && (
        <img
          src={image}
          alt=""
          className="stat-card__icon"
        />
      )}

      <div className="stat-card__content">
        <p className="stat-card__title">{title}</p>
        <strong className="stat-card__value">{value}</strong>
      </div>
    </section>
  );
}
