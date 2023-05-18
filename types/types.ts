export enum PromoBlockStatus {
	Start = 0,
	End = 1,
	NotActive = 2,
	Active = 3,
}

export type TPromoBlock = {
	id: Number;
	title: String;
	status: PromoBlockStatus;
};

export type TPromoBlocks = Array<TPromoBlock>;
