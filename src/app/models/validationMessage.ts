export class validationMessage{
  account_validation_messages:any = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'notEqual', message: 'Password not match' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ],
    'text': [
      { type: 'required', message: 'Field is required' },
      { type: 'minlength', message: 'Field must be at least 5 characters long' },
      { type: 'maxlength', message: 'Field cannot be more than 25 characters long' }
    ],
    'number': [
      { type: 'value', message: 'Value selected isn´t correct' }
    ]
  }
}