// A question as the review screen needs it. Structurally compatible with CapsItem and NstItem.
// `kind` is graeme's new item-kind field (absent = multiple choice); only 'mcq' is reviewed in v1.
export interface ReviewBankItem {
  id?: number;
  section?: string;
  kind?: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation?: string;
}
