import axios from "axios";
const TopAuthorEndPoint = "/api/top-authors";

// Function that will be used to fetch data from backend
const topAuthors = async () => {
  try {
    const response = await axios.get(TopAuthorEndPoint);
    if (!response.data.error) {
      return {
        success: true,
        authors: response.data,
      };
    } else {
      return {
        success: false,
        message: `Error fetching data: ${response.data.message}`,
      };
    }
  } catch (error) {
    const message = (error instanceof Error) ? error.message : 'An error occurred';
    return {
      success: false,
      message: message,
    };
  }
};

export { topAuthors };
