import { Stack } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/PaginationPage.module.css";

function PaginationPage() {
  return (
    <Stack alignItems="center" py={2}>
      <ul style={{ display: "flex" }}>
        {new Array(10)
          .fill(0)
          .map((_, index) => index + 1)
          .map((number) => (
            <li key={number} className={styles.li}>
              <Link className={styles.link} href={`/countPage/${number}`}>
                {number}
              </Link>
            </li>
          ))}
      </ul>
    </Stack>
  );
}

export default PaginationPage;
