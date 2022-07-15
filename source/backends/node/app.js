const express = require('express')
const app = express()
const port = 3000

app.get('/v3.1/nodes/atms', (req, res) => {
  console.log('called atm')
  res.send('{\"atms\": [{\"atmLocation\": {\"address\": {\"city\": \"ISLANDIA\", \"country\": \"USA\", \"postalCode\": \"14758\", \"state\": \"NY\", \"street\": \"1700 VETERANS HIGHWAY\"}, \"coordinates\": {\"latitude\": 40.805604, \"longitude\": -73.181343 }, \"id\": \"848936\", \"isAvailable24Hours\": true, \"isDepositAvailable\": false, \"isHandicappedAccessible\": false, \"isOffPremise\": true, \"isSeasonal\": false, \"languageType\": null, \"locationDescription\": \"1700 VETERANS HIGHWAY,ISLANDIA,NY,14758,USA\", \"logoName\": \"711\", \"name\": \"7ELEVEN-FCTI\"}, \"distance\": 0.5843634867457268 }, {\"atmLocation\": {\"address\": {\"city\": \"COLORADO\", \"country\": \"USA\", \"postalCode\": \"14758\", \"state\": \"DN\", \"street\": \"12551 HWY 24 HARTSEL\"}, \"coordinates\": {\"latitude\": 39.0214828, \"longitude\": -105.8002834 }, \"id\": \"848936\", \"isAvailable24Hours\": true, \"isDepositAvailable\": false, \"isHandicappedAccessible\": false, \"isOffPremise\": true, \"isSeasonal\": false, \"languageType\": null, \"locationDescription\": \"12551 HWY 24 HARTSEL,COLORADO,DN,14758,USA\", \"logoName\": \"711\", \"name\": \"BADGER BASIN\"}, \"distance\": 3.57 }, {\"atmLocation\": {\"address\": {\"city\": \"COLORADO\", \"country\": \"USA\", \"postalCode\": \"14758\", \"state\": \"DN\", \"street\": \"8722 TELLER HWY NO 1 FLORISSANT\"}, \"coordinates\": {\"latitude\": 38.8213947, \"longitude\": -105.2608944 }, \"id\": \"848936\", \"isAvailable24Hours\": true, \"isDepositAvailable\": false, \"isHandicappedAccessible\": false, \"isOffPremise\": true, \"isSeasonal\": false, \"languageType\": null, \"locationDescription\": \"8722 TELLER HWY NO 1 FLORISSANT,COLORADO,DN,14758,USA\", \"logoName\": \"711\", \"name\": \"ATM TECHNOLOGIES\"}, \"distance\": 6.85 } ], \"atms_count\": 3, \"error_code\": \"0\", \"http_code\": \"200\", \"limit\": 3, \"page\": 1, \"page_count\": 1, \"success\": true }')
})

app.get('/visadirect/fundstransfer/v1/pullfundstransactions', (req, res) => {
  console.log('called visa')
  res.send('{\"transactionIdentifier\": 875806056061895, \"actionCode\": \"00\", \"approvalCode\": \"98765X\", \"responseCode\": \"5\", \"transmissionDateTime\": \"2020-08-28T11:52:08Z\", \"cavvResultCode\": \"8\", \"cpsAuthorizationCharacteristicsIndicator\": \"3333\"}')
})

app.get('/pix', (req, res) => {
  res.send('{\"transactionIdentifier\": 875806056061895, \"actionCode\": \"00\", \"approvalCode\": \"98765X\", \"responseCode\": \"5\", \"transmissionDateTime\": \"2020-08-28T11:52:08Z\", \"cavvResultCode\": \"8\", \"cpsAuthorizationCharacteristicsIndicator\": \"3333\"}')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
