export interface PaymentMerchantInterface {
  mchId: string;
  secret: string;
  body: string;
  notifyUrl: string;
}
