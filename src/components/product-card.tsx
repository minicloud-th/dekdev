import { Link } from '@tanstack/react-router';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { money,type Product } from '@/lib/products';
import { useStore } from './store-provider';
export function ProductCard({product}:{product:Product}) {const {add}=useStore();return <article className="product-card"><Link to="/product/$id" params={{id:product.id}} className="block product-image"><img src={product.image} alt={product.name} width={1024} height={768} loading="lazy"/>{product.badge&&<span className="product-badge">{product.badge}</span>}</Link><div className="product-info"><p className="product-meta">{product.label}</p><Link to="/product/$id" params={{id:product.id}}><h3 className="product-title">{product.name}</h3></Link><div className="product-bottom"><span className="text-sm font-bold">{money(product.price)}</span><Button variant="outline" size="icon" className="h-7 w-7 rounded-full" aria-label={`เพิ่ม ${product.name} ลงตะกร้า`} onClick={()=>add(product)}><Plus/></Button></div></div></article>;}
