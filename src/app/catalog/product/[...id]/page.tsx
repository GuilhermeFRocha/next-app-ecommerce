"use client";

interface ProductProps {
  params: {
    data: string[];
  };
}

export default function Product({ params }: ProductProps) {
  const [size, color, productId] = params.data;
  return (
    <div>
      <p>{productId}</p>
      <p>{color}</p>
      <p>{size}</p>
      <button onClick={() => alert("clicked")}></button>
    </div>
  );
}
