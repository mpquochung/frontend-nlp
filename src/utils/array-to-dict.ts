export function sortArrays(keys: string[], values: number[]): { keys: string[], values: number[] } {
    // Create an array of objects
    const combined = keys.map((key, index) => ({ key, value: values[index] }));
  
    // Sort the array of objects by the value property
    combined.sort((a, b) => b.value - a.value);
  
    // Create two new arrays: one for the sorted keys and one for the sorted values
    const sortedKeys = combined.map(item => item.key).slice(0, 4);
    const sortedValues = combined.map(item => parseFloat(item.value.toFixed(2))).slice(0, 4);
  
    return { keys: sortedKeys, values: sortedValues };
  }

