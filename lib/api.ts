// lib/api.ts
// Central API client — talks to the Express + MongoDB backend

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// ── Generic fetch wrapper ──────────────────────────────────────
async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "API request failed");
  return data;
}

// ── Auth token helper (reads from localStorage) ────────────────
function authHeader(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const token = localStorage.getItem("im_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// ══════════════════════════════════════════════════════════════
// PRODUCTS
// ══════════════════════════════════════════════════════════════

export interface ProductQueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  rating?: number;
  badge?: string;
  isFeatured?: boolean;
  search?: string;
}

/** GET /api/products — list with filters + pagination */
export async function getProducts(params: ProductQueryParams = {}) {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") qs.set(k, String(v));
  });
  return apiFetch<any>(`/products?${qs.toString()}`);
}

/** GET /api/products/search?q= */
export async function searchProducts(q: string, limit = 10) {
  return apiFetch<any>(`/products/search?q=${encodeURIComponent(q)}&limit=${limit}`);
}

/** GET /api/products/filters/meta */
export async function getFilterMeta(categoryId?: string) {
  const qs = categoryId ? `?category=${categoryId}` : "";
  return apiFetch<any>(`/products/filters/meta${qs}`);
}

/** GET /api/products/:id */
export async function getProduct(id: string) {
  return apiFetch<any>(`/products/${id}`);
}

/** POST /api/products — create (admin|manager) */
export async function createProduct(formData: FormData) {
  const res = await fetch(`${API_BASE}/products`, {
    method: "POST",
    headers: authHeader(),
    body: formData, // multipart — do NOT set Content-Type manually
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
}

/** PATCH /api/products/:id — update (admin|manager) */
export async function updateProduct(id: string, formData: FormData) {
  const res = await fetch(`${API_BASE}/products/${id}`, {
    method: "PATCH",
    headers: authHeader(),
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
}

/** DELETE /api/products/:id — delete (admin) */
export async function deleteProduct(id: string) {
  return apiFetch<any>(`/products/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  });
}

/** POST /api/products/:id/datasheet — upload PDF */
export async function uploadDatasheet(id: string, formData: FormData) {
  const res = await fetch(`${API_BASE}/products/${id}/datasheet`, {
    method: "POST",
    headers: authHeader(),
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
}

// ══════════════════════════════════════════════════════════════
// CATEGORIES
// ══════════════════════════════════════════════════════════════

/** GET /api/categories */
export async function getCategories() {
  return apiFetch<any>("/categories?includeCount=true");
}

/** GET /api/categories/:id */
export async function getCategory(idOrSlug: string) {
  return apiFetch<any>(`/categories/${idOrSlug}`);
}

/** POST /api/categories — create (admin|manager) */
export async function createCategory(formData: FormData) {
  const res = await fetch(`${API_BASE}/categories`, {
    method: "POST",
    headers: authHeader(),
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
}

/** PATCH /api/categories/:id — update (admin|manager) */
export async function updateCategory(id: string, formData: FormData) {
  const res = await fetch(`${API_BASE}/categories/${id}`, {
    method: "PATCH",
    headers: authHeader(),
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
}

/** DELETE /api/categories/:id — delete (admin) */
export async function deleteCategory(id: string) {
  return apiFetch<any>(`/categories/${id}`, {
    method: "DELETE",
    headers: authHeader(),
  });
}

// ══════════════════════════════════════════════════════════════
// AUTH
// ══════════════════════════════════════════════════════════════

/** POST /api/auth/login */
export async function login(email: string, password: string) {
  const data = await apiFetch<any>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  // Persist token
  if (data.token) localStorage.setItem("im_token", data.token);
  return data;
}

/** POST /api/auth/logout */
export async function logout() {
  await apiFetch("/auth/logout", { method: "POST" });
  localStorage.removeItem("im_token");
}

/** GET /api/auth/me */
export async function getMe() {
  return apiFetch<any>("/auth/me", { headers: authHeader() });
}
