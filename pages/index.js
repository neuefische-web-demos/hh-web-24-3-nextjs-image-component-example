import Image from "next/image";
import cats from "@/db/cats.json";
import styles from "@/styles/Home.module.css";

export default function HomePage() {
  return (
    <main>
      {cats.map(({ id, name, age, characteristics, image }) => (
        <article key={id} className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src={image}
              alt={`A photo of ${name}, a ${age}-year-old cat`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.cardContent}>
            <h2>{name}</h2>
            <ul>
              <li>
                <strong>Age:</strong> {age}
              </li>
              <li>
                <strong>Characteristics:</strong>
                <ul>
                  {characteristics.map((characteristic) => (
                    <li key={characteristic}>{characteristic}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </article>
      ))}
    </main>
  );
}
