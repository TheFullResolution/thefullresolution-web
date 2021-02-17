export function formatDate(date: string, type: string): string {
  const DateObject = new Date(date);

  switch (type) {
    case 'month': {
      return DateObject.toLocaleDateString('en', {
        year: 'numeric',
        month: 'long',
      });
    }

    case 'year': {
      return DateObject.toLocaleDateString('en', { year: 'numeric' });
    }

    default:
      return DateObject.toLocaleDateString();
  }
}
