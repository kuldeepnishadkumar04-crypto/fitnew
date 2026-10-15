export type CartItem = { id: string; quantity: number };
export const CART_KEY = 'fitnew-cart-v1';
export const CART_EVENT = 'fitnew:cart-updated';

export function readCart(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const value = JSON.parse(window.localStorage.getItem(CART_KEY) || '[]') as CartItem[];
    return Array.isArray(value) ? value.filter((item) => typeof item.id === 'string' && Number.isInteger(item.quantity) && item.quantity > 0) : [];
  } catch { return []; }
}
export function writeCart(items: CartItem[]) {
  window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(CART_EVENT));
}
export function addToCart(id: string) {
  const cart = readCart();
  const found = cart.find((item) => item.id === id);
  if (found) found.quantity += 1; else cart.push({ id, quantity: 1 });
  writeCart(cart);
}
