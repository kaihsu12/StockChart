export function formatTime(timestamp) {
  const currentTime = new Date();
  const postTime = new Date(timestamp);

  const diffInMilliseconds = currentTime - postTime;
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));

  if (diffInHours < 1) {
    return '剛剛';
  } else if (diffInHours >= 1 && diffInHours <= 24) {
    return `${diffInHours}小時前`;
  } else {
    return `${postTime.getFullYear()}/${
      String(postTime.getMonth() + 1).length !== 2 ? '0' : ''
    }${postTime.getMonth() + 1}/${
      String(postTime.getDate()).length !== 2 ? '0' : ''
    }${postTime.getDate()}`;
  }
}

export function formatDate(date) {
  const time = new Date(date);
  return `${time.getFullYear()}/${
    String(time.getMonth() + 1).length !== 2 ? '0' : ''
  }${time.getMonth() + 1}/${
    String(time.getDate()).length !== 2 ? '0' : ''
  }${time.getDate()}`;
}

export function formatDateForApi(date) {
  return `${date.getFullYear()}-${
    String(date.getMonth() + 1).length === 2 ? '' : '0'
  }${date.getMonth() + 1}-${
    String(date.getDate()).length === 2 ? '' : '0'
  }${date.getDate()} ${
    String(date.getHours()).length === 2 ? '' : '0'
  }${date.getHours()}:${
    String(date.getMinutes()).length === 2 ? '' : '0'
  }${date.getMinutes()}:${
    String(date.getSeconds()).length === 2 ? '' : '0'
  }${date.getSeconds()}`;
}

export function formatDateForApiWithoutTime(date) {
  const time = new Date(date);
  return `${time.getFullYear()}-${
    String(time.getMonth() + 1).length !== 2 ? '0' : ''
  }${time.getMonth() + 1}-${
    String(time.getDate()).length !== 2 ? '0' : ''
  }${time.getDate()}`;
}

export function formatTimeForApi(timestamp) {
  const time = new Date(timestamp);
  return `${
    String(time.getHours()).length === 2 ? '' : '0'
  }${time.getHours()}:${
    String(time.getMinutes()).length === 2 ? '' : '0'
  }${time.getMinutes()}:${
    String(time.getSeconds()).length === 2 ? '' : '0'
  }${time.getSeconds()}`;
}
