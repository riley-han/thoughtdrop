import React, { useState } from "react"
import styles from "./styles.module.scss"
import { useRouter } from "next/router"

interface Props {
  icon: string
}
const NavbarContainer: React.FC<Props> = ({ icon }) => {
  const router = useRouter()
  return (
    <div className={styles.Container}>
      <div
        style={{
          display: "flex",
          color: "white",
          justifyContent: "space-evenly",
          alignItems: "center",
          verticalAlign: "middle",
        }}
      >
        <img
          onClick={() => {
            router.push("/weather")
          }}
          src={icon || "#"}
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    </div>
  )
}

export default NavbarContainer
