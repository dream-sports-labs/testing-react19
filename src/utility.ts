export function fetchData(data: string): Promise<string> {
    return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
}

export async function updateQuantity(newQuantity: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(newQuantity);
    }, 2000);
  });
}

export async function addToCart(prevState: any, queryData: string) {
  if (queryData === '1') {
    return 'Added to cart';
  } else {
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    return "Couldn't add to cart: the item is sold out.";
  }
}

export const deliverMessage = async (message: string): Promise<string> => {
  await new Promise(res => setTimeout(res, 1000));
  return message;
};
