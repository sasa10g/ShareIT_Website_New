function Config() {
  return {
    emailServerUrl: 'http://www.shareit.rs/',
  };
}

const apiPath = Config().emailServerUrl;

export const contactService = {
  sendInquiry,
};

function sendInquiry(inquiry) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inquiry),
  };

  /** PHP CONFIG FILE IN FOOTER folder */
  return fetch(apiPath + 'email.php', requestOptions).then(handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response;
}
