export function fetchData(data: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
