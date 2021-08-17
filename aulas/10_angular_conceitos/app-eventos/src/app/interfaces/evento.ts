export interface Evento {
	code?: number; // quando usamos interrogação declaramos que o valor não é obrigatório
	_id?: string;
	descricao: string;
	data: string;
	preco: number;
}
