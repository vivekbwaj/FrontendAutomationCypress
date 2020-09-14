import { internet, address, commerce, date, name } from "faker";

export const userDetails = {
    "EmailAddress":`autocy${internet.email()}`,
    "FirstName":"test",
    "SurName":"cy",
    "DOB":"12/12/1990",
    "UnitNo":"26",
    "StreetNo":"120",
    "StreetName":"Collins",
    "StreetType":"Street",
    "Suburb":"Melbourne",
    "State":"VIC",
    "PostCode":"3000",
    "MobileNo":"0400000000",
    "Password":"Password1"
}

export const creditCard = {
    "DepositAmount": "100",
    "CardName": "Test New",
    "CardNo": "345435345345435",
    "Expiry": "12/21",
    "CVV": "123"
}
