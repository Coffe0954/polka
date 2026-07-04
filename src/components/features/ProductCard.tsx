import React from "react";
import Image from "next/image";
import { Heart, MapPin } from "lucide-react";
import { Product } from "@/types";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { useToast } from "@/lib/toast-context";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { showToast } = useToast();

  const productPriceFormatted = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="product-card-container premium-content-card flex flex-col h-full overflow-hidden"
    >
      <figure className="product-image-wrapper relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="product-thumbnail-image object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={(event) => {
            event.stopPropagation();
            showToast("Добавлено в избранное", "success");
          }}
          className="favorite-toggle-button absolute right-2 top-2 h-9 w-9 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-apple-text-secondary hover:text-red-500"
          aria-label="Добавить в избранное"
        >
          <Heart
            className={`favorite-heart-icon ${product.isFavorite ? "fill-red-500 text-red-500" : ""}`}
            size={18}
          />
        </Button>
      </figure>

      <div className="product-details-content flex flex-1 flex-col p-4">
        <div className="product-price-tag mb-1 text-xl font-bold tracking-tight text-apple-text">
          {productPriceFormatted}
        </div>

        <h3 className="product-title-link mb-2 line-clamp-2 text-[15px] font-medium leading-snug text-apple-text group-hover:text-apple-accent transition-colors">
          {product.title}
        </h3>

        <div className="product-location-info mt-auto flex items-center gap-1 text-[13px] text-apple-text-secondary">
          <MapPin className="location-marker-icon" size={14} />
          <span className="location-text-label">{product.location}</span>
        </div>
      </div>
    </motion.article>
  );
}
