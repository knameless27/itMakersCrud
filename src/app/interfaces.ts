// En este archivo declare las dos interfaces que mas use durante todo el proyecto

export interface Usuario {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface Respuesta {
  data: any;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
