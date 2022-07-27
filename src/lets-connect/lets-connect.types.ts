export enum ContactFormFormField {
  Name = 'name',
  Email = 'email',
  Website = 'website',
  Budget = 'budget',
  Message = 'message',
  Urgent = 'is_urgent'
}
export enum ContactFormFormLabel {
  Name = 'Enter your name',
  Email = 'Enter your email',
  Website = 'What is your website?',
  Budget = 'Your budget: ',
  Message = 'Tell me about your project...',
  Urgent = `It's urgent! Email me as soon as possible`
}
export interface IContactFormState {
  [ContactFormFormField.Name]: string
  [ContactFormFormField.Email]: string
  [ContactFormFormField.Website]: string
  [ContactFormFormField.Budget]: string
  [ContactFormFormField.Message]: string
  [ContactFormFormField.Urgent]: boolean
}