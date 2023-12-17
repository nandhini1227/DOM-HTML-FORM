let maincontainer = setTitle("div", "class", "container-fluid");
let formLayout = setTitle("main", "id", "form-layout");
let titlecontent = setTitle("form", "id", "form");
function setTitle(tagname, key, value) {
  let formbody = document.createElement(tagname);
  formbody.setAttribute(key, value);
  return formbody;
}

let maindiv = document.createElement("div");
maindiv.classList.add("div","form-row","d-flex","justify-content-center","col-md-8");

let titlediv = document.createElement("div");
titlediv.classList.add("form-group", "col-md-10");

let divh1 = titledivchild("h1", "id", "title", "DOM HTML FORM :");
let divp = titledivchild("p","id","description","*Kindly fill the below form ");
function titledivchild(tagname, key, value, contenttext) {
  let titledivchild = document.createElement(tagname);
  titledivchild.setAttribute(key, value);
  titledivchild.innerHTML = contenttext;
  return titledivchild;
}


let firstname_div = sixdiv("div", "form-group", "col-md-5");
let lastname_div = sixdiv("div", "form-group", "col-md-5");
let address_div = sixdiv("div", "form-group", "col-md-10");
let state_div = sixdiv("div", "form-group", "col-md-10");
let country_div = sixdiv("div", "form-group", "col-md-10");
let pincode_div = sixdiv("div", "form-group", "col-md-10");
let gender_div = sixdiv("div", "form-group", "col-md-10");
let food_div = sixdiv("div", "form-group", "col-md-10");

function sixdiv(tagname, divclass1, divclass2) {
  let six_div_element = document.createElement(tagname);
  six_div_element.classList.add(divclass1, divclass2);
  return six_div_element;
}

let firstname_label = inputlabel("label", "for", "firstname", "FIRST NAME:");
let lastname_label = inputlabel("label", "for", "lastname", "LAST NAME:");
let address_label = inputlabel("label", "for", "address", "ADDRESS:");
let state_label = inputlabel("label", "for", "state", "STATE:");
let country_label = inputlabel("label", "for", "country", "COUNTRY:");
let pincode_label = inputlabel("label", "for", "pincode", "PINCODE:");

function inputlabel(tagname, key, value, contenttext) {
  let input_label_element = document.createElement(tagname);
  input_label_element.setAttribute(key, value);
  input_label_element.innerHTML = contenttext;
  return input_label_element;
}
let firstname_input = input("input","type","text","class","form-control","id","first-name","placeholder",
  "ENTER YOUR FIRSTNAME","required");

let lastname_input = input("input","type","text","class","form-control","id","last-name","placeholder",
  "ENTER YOUR LASTNAME","required");

let address_input = input("textarea","type","textarea","class","form-control","id","address","placeholder",
  "ENTER YOUR ADDRESS","required");

let state_input = input("input","type", "text","class","form-control","id","state","placeholder",
  "ENTER YOUR STATE","required");

let country_input = input( "input","type", "text","class","form-control","id","country","placeholder",
  "ENTER YOUR COUNTRY","required");

let pincode_input = input("input","type","text","class","form-control","id","pincode","placeholder",
  "ENTER YOUR PINCODE","required");

function input(tagname,key1,value1,key2,value2,key3,value3,key4,value4,key5)
 {
  let inputtype = document.createElement(tagname);
  inputtype.setAttribute(key1, value1);
  inputtype.setAttribute(key2, value2);
  inputtype.setAttribute(key3, value3);
  inputtype.setAttribute(key4, value4);
  inputtype.setAttribute(key5, "");
  return inputtype;
}

let gender_p = document.createElement("p");
gender_p.innerText = "GENDER:";
let gender_div1 = genderdiv("div", "class", "gender");
let gender_div2 = genderdiv("div", "class", "gender");
let gender_div3 = genderdiv("div", "class", "gender");

function genderdiv(tagname, key, value) {
  let gender = document.createElement(tagname);
  gender.setAttribute(key, value);
  return gender;
}

let inputmale = genderinput("input","type","radio","value","male","name","gender","id","male","required");

let inputfemale = genderinput("input","type","radio","value","female","name","gender","id","female","required");

let inputothers = genderinput("input","type","radio","value","others","name","gender","id","others","required");

function genderinput(tagname,key1,value1,key2,value2,key3,value3,key4,value4,key5)
{
  let gendertype = document.createElement(tagname);
  gendertype.setAttribute(key1, value1);
  gendertype.setAttribute(key2, value2);
  gendertype.setAttribute(key3, value3);
  gendertype.setAttribute(key4, value4);
  gendertype.setAttribute(key5, "");
  return gendertype;
}
let malelabel = genderlabel("label", "for", "male", "MALE");
let femalelabel = genderlabel("label", "for", "female", "FEMALE");
let otherslabel = genderlabel("label", "for", "others", "OTHERS");

function genderlabel(tagname, key1, value1, contenttext) {
  let genderLabel = document.createElement(tagname);
  genderLabel.setAttribute(key1, value1);
  genderLabel.innerHTML = contenttext;
  return genderLabel;
}
let food_label = document.createElement("label");
food_label.setAttribute("for", "food");
food_label.innerHTML = "FOOD ITEMS:";

let food_div1 = fooditemsdiv("div");
let food_div2 = fooditemsdiv("div");
let food_div3 = fooditemsdiv("div");
let food_div4 = fooditemsdiv("div");
let food_div5 = fooditemsdiv("div");

function fooditemsdiv(tagname) {
  let foodItems = document.createElement(tagname);
  return foodItems;
}



let food_item1 = fooditemsinput("input","type","checkbox","name","food","value","Fried Rice ","class","checkbox");

let food_item2 = fooditemsinput("input","type","checkbox","name","food","value"," Burger ","class","checkbox");

let food_item3 = fooditemsinput("input","type","checkbox","name","food","value","Idly","class","checkbox");

let food_item4 = fooditemsinput("input","type","checkbox","name","food","value"," Dosa ","class","checkbox");

let food_item5 = fooditemsinput("input","type","checkbox","name","food","value","Pizza ","class","checkbox");

function fooditemsinput(tagname,key1,value1,key2,value2,key3,value3,key4,value4) 
{
  let fooditem = document.createElement(tagname);
  fooditem.setAttribute(key1, value1);
  fooditem.setAttribute(key2, value2);
  fooditem.setAttribute(key3, value3);
  fooditem.setAttribute(key4, value4);
  return fooditem;
}
let food_label1 = fooditemslabel("label","for","food","Fried Rice");
let food_label2 = fooditemslabel("label","for","food","Burger");
let food_label3 = fooditemslabel("label","for","food","Idly");
let food_label4 = fooditemslabel("label","for","food","Dosa");
let food_label5 = fooditemslabel("label","for","food","Pizza");

function fooditemslabel(tagname, key, value, contenttext) {
  let foodlable= document.createElement(tagname);
  foodlable.setAttribute(key, value);
  foodlable.innerHTML = contenttext;
  return foodlable;
}
let button_div = document.createElement("div");
button_div.classList.add("form-group","col-md-10" ,"buttonstyle");


let button1 = btnele("button","btn","btn-primary","innerbutton","type","submit","id","submit","value","SUBMIT","SUBMIT");

let button2 = btnele("button","btn","btn-primary","innerbutton","type","reset","id","reset","value","RESET","RESET");

function btnele(tagname,class1,class2,class3,key2,value2,key3,value3,key4,value4,contenttext)
 {
  let buttons = document.createElement(tagname);
  buttons.classList.add(class1, class2, class3);
  buttons.setAttribute(key2, value2);
  buttons.setAttribute(key3, value3);
  buttons.setAttribute(key4, value4);
  buttons.innerHTML = contenttext;
  return buttons;
}

let table_div = document.createElement("div");
table_div.classList.add("form-group", "col-md-10");

let tabletag = document.createElement("table");
tabletag.setAttribute("class", "table");
tabletag.setAttribute("border", "1");
tabletag.setAttribute("cellspacing", "0");
tabletag.setAttribute("cellpadding", "");

let tablehead = document.createElement("thead");
tablehead.setAttribute("class", "thead-dark");
tablehead.setAttribute("id", "thead-head");

let tablerow = document.createElement("tr");
tablerow.setAttribute("id", "rowalign");

let table_body = document.createElement("tbody");
table_body.setAttribute("id", "table-styles");

let th1 = tableheader("th", "scope", "col", "FIRST_NAME");
let th2 = tableheader("th", "scope", "col", "LAST_NAME");
let th3 = tableheader("th", "scope", "col", "ADDRESS");
let th4 = tableheader("th", "scope", "col", "STATE");
let th5 = tableheader("th", "scope", "col", "COUNTRY");
let th6 = tableheader("th", "scope", "col", "PINCODE");
let th7 = tableheader("th", "scope", "col", "GENDER");
let th8 = tableheader("th", "scope", "col", "FOOD");

function tableheader(tagname, key, value, contenttext) {
  let tablecol = document.createElement(tagname);
  tablecol.setAttribute(key, value);
  tablecol.innerHTML = contenttext;
  return tablecol;
}


document.body.append(maincontainer);
maincontainer.append(formLayout);
formLayout.append(titlecontent);
titlecontent.append(maindiv);
titlediv.append(divh1, divp);

maindiv.append(titlediv,firstname_div,lastname_div,address_div,state_div,country_div,
    pincode_div,gender_div,food_div,button_div,table_div);

firstname_div.append(firstname_label, firstname_input);
lastname_div.append(lastname_label, lastname_input);
address_div.append(address_label, address_input);
state_div.append(state_label, state_input);
country_div.append(country_label, country_input);
pincode_div.append(pincode_label, pincode_input);

gender_div.append(gender_p, gender_div1, gender_div2, gender_div3);
gender_div1.append(inputmale, malelabel);
gender_div2.append(inputfemale, femalelabel);
gender_div3.append(inputothers, otherslabel);

food_div.append(food_label,food_div1,food_div2,food_div3,food_div4,food_div5);
food_div1.append(food_item1, food_label1);
food_div2.append(food_item2, food_label2);
food_div3.append(food_item3, food_label3);
food_div4.append(food_item4, food_label4);
food_div5.append(food_item5, food_label5);
button_div.append(button1, button2);
table_div.append(tabletag);
tabletag.append(tablehead, table_body);
tablehead.append(tablerow);
tablerow.append(th1, th2, th3, th4, th5, th6, th7, th8);
let submit_button = document.getElementById("submit");
submit_button.addEventListener("click", (ele) => {
  ele.preventDefault();
});

button1.addEventListener("click", btnname);
function btnname() {
  let firstname_value = document.getElementById("first-name").value;
  let lastname_value = document.getElementById("last-name").value;
  let address_value = document.getElementById("address").value;
  let state_value = document.getElementById("state").value;
  let country_value = document.getElementById("country").value;
  let pincode_value = document.getElementById("pincode").value;


  let row1 = document.createElement("tr");
  table_body.append(row1);

  let res = [];
  let male_value;
  let female_value;
  let others_value;
  let null_value = [];
  let checkbox_value = document.getElementsByClassName("checkbox");
  for (let k = 0; k < checkbox_value.length; k++) {
    if (checkbox_value[k].checked) {
      null_value.push(checkbox_value[k]);
    }
  }

  if (firstname_value == "" || lastname_value == "" || address_value == "" || state_value == "" ||
    country_value == "" || pincode_value == "" || (male_value == "" && female_value == "" && others_value == "") ||
    null_value.length == 0)
  {
    alert(" kindly fill all fields in this form");
  }
  

  if (null_value.length < 2) 
  {
    alert("select atleast 2 Food items ");
  }

  
  if (firstname_value !== "" && lastname_value !== "" && address_value !== "" &&
    state_value !== "" && country_value !== "" && pincode_value !== "" &&
    (male_value !== "" || female_value !== "") && null_value.length === 2)
    {
    
    for (let i = 0; i < 8; i++) {
      let data = document.createElement("td");
      res.push(data);
    }
    
    res[0].append(firstname_value);
    res[1].append(lastname_value);
    res[2].append(address_value);
    res[3].append(state_value);
    res[4].append(country_value);
    res[5].append(pincode_value);
    
    if (male.checked) {
      male_value = document.getElementById("male").value;
      res[6].append(male_value);
    }
    if (female.checked) {
      female_value = document.getElementById("female").value;
      res[6].append(female_value);
    }
    if (others.checked) {
      others_value = document.getElementById("others").value;
      res[6].append(others_value);
    }
    
    for (let j = 0; j < checkbox_value.length; j++) {
      if (checkbox_value[j].checked) {
        res[7].append(checkbox_value[j].value);
      }
    }
    
    row1.append(res[0], res[1], res[2], res[3], res[4], res[5], res[6], res[7]);
  }

}