import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";

export default function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => {
            return (
              <Grid.Column key={item.id}>
                <Link href={`/detail/${item.id}`}>
                  <div className={styles.wrap}>
                    <img
                      src={item.image_link}
                      alt={item.name}
                      className={styles.img_item}
                    ></img>
                    <strong className={styles.tit_item}>{item.name}</strong>
                    <span className={styles.txt_info}>
                      {item.category} {item.product_type}
                    </span>
                    <strong className={styles.num_price}>{item.price}</strong>
                  </div>
                </Link>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
}
