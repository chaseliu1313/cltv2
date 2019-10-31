import validUrl from 'valid-url';

export function inputValid(input) {
  const suspect1 = input.name.split(' ');
  const suspect2 = input.message.split(' ');
  const suspect3 = input.email;

  let valid = true;

  suspect1.forEach(e => {
    const sus = e.toLowerCase();

    if (
      validUrl.isUri(sus) ||
      sus === 'loan' ||
      sus === 'cost' ||
      sus === 'free' ||
      sus === 'download' ||
      sus === 'buy' ||
      sus === 'discount' ||
      sus === 'click'
    ) {
      valid = false;
    }
  });
  suspect2.forEach(e => {
    const sus = e.toLowerCase();

    if (
      validUrl.isUri(sus) ||
      sus === 'loan' ||
      sus === 'cost' ||
      sus === 'free' ||
      sus === 'download' ||
      sus === 'buy' ||
      sus === 'discount' ||
      sus === 'click'
    ) {
      valid = false;
    }
  });

  if (!suspect3.includes('@')) {
    valid = false;
  }

  return valid;
}
