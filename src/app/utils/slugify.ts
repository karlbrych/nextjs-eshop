// /utils/slugify.ts

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD") // Remove diacritics like č, ř, etc.
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumerics with dashes
    .replace(/(^-|-$)+/g, ""); // Remove starting/ending dashes
}
