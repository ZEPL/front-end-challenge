//const radios is the radio initial state: we can change the number of radio and checkbox
//We doesn't put id in it so we will suppose that the name is UNIQUE!!!! (for map key)
export const radios = [{
  title: "radio1",
  state: true,
  checkbox:[{
    "title": "checkbox1",
    "state": true //false
  },{
    "title": "checkbox2",
    "state": true //false
  }]
  },
  {
    title: "radio2",
    state: false,
    checkbox:[{
      "title": "checkbox3",
      "state": false //false
    },{
      "title": "checkbox4",
      "state": true //false
    },{
      "title": "checkbox5",
      "state": false //false
    }]
}];
