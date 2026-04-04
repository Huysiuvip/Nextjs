import React from 'react'
// export const revalidate = 0; // disable cache, always re-render on server
export const revalidate = 5; // re-render trên server sau mỗi 5s, nếu có request mới đến sau 5s thì sẽ re-render lại trang trên server, còn nếu có request mới đến trước 5s thì sẽ trả về cache cũ
const MathRandom = () => {
    console.log("MathRandom component rendered");
    const value = Math.random();
  return (
    <div>{value}</div>
  )
}

export default MathRandom