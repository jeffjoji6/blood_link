function populate(s1,s2)
{
            var s1 = document.getElementById(s1);
            var s2 = document.getElementById(s2);

            s2.innerHTML = "";

            if(s1.value == "all"){
              var optionArray = ['chennai|chennai', 'nalanda|Nalanda', 'aurangabad|Aurangabad', 'buxar|Buxar', 'vaishali|Vaishali', 'champaran|Champaran','amabala|Ambala', 'gurgaon|Gurgaon', 'faridabad|Faridabad', 'kurukshetra|Kurukshetra', 'karnal|Karnal', 'panipat|Panipat', 'east delhi|East Delhi', 'central delhi|Central Delhi', 'new delhi|New Delhi', 'north delhi| North Delhi', 'shahadra|Shahadra', 'south delhi|South Delhi', 'amritsar|Amritsar', 'firozpur|Firozpur', 'ludhiana|Ludhiana', 'patiala|Patiala', 'bathinda|Bathinda', 'mohali|Mohali', 'alwar|Alwar', 'ajmer|Ajmer', 'bikaner|Bikaner', 'jaipur|Jaipur', 'jodhpur|Jodhpur', 'udaipur|Udaipur', 'almora|Almora', 'bageshwar|Bageshwar', 'dehradun|Dehradun', 'haridwar|Haridwar', 'nainital|Nainital', 'rudraprayag|Rudraprayag', 'agra|Agra', 'bareilly|Bareilly', 'kanpur|Kanpur', 'lucknow|Lucknow', 'moradabad|Moradabad', 'prayagraj|Prayagraj'];
            }
            else if(s1.value=="Tamil Nadu"){
              var optionArray = ['Chennai|chennai', 'Coimbatore|coimbatore', 'Madurai|madurai'];
            }
            else if(s1.value == "Kerala"){
                var optionArray = ['Ernakulam|ernakulam',"Thrissur|thrissur","Trivandrum|trivandrum"];
            }
            else if(s1.value == "Karnataka"){
                var optionArray = ["Bagalkot|bagalot","Ballari|ballari","Belagavi|belagavi"];
            }

            for(var option in optionArray){
              var pair = optionArray[option].split("|");
              var newoption = document.createElement("option");

              newoption.value = pair[0];
              newoption.innerHTML=pair[1];
              s2.options.add(newoption);
            }
}