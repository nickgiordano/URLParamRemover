# URLParamRemover
A Google Sheets Apps Script focused on cleaning URLs of all query parameters for more straightforward data handling

## Description
This Apps Script is designed for use as a function in Google Sheets which removes parameters from a URL, returning the main URL without query strings.

## Installation
To use this script in your Google Sheets:
1. Open your Google Sheets document.
2. Go to Extensions > Apps Script.
3. Copy and paste the script into the script editor.
4. Save and close the script editor.

## Usage
To use the function in your spreadsheet:
`=REMOVE_URL_PARAMETERS("https://example.com/page?param=value")`

This will return: `https://example.com/page`

Note: it may be useful to copy the resulting cells and paste them into a new column using "Paste Special > Values only". This will unlink these cleaned URLs from the previous two columns.

## Contributing
Contributions to this script are welcome.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
