email = input("please write your email")
invalid_letters=["!","#","$","%","&","/","+", "<",">","%", ")", "(", "€", "{", "}", "*", "^", "~","£", "=", "?", ",", " ", "ö", "ü", "ğ", "ş", "\'"]

for i in invalid_letters:
    if email.count(i)> 0:
        message= "invalid email 1"
        break
        
    else:
        if email.count("@")<1:
            message= "invalid email 2"
            
        elif email.count("@")>1:
            message= "invalid email 3"
            
        else:  
            split_email=email.split("@")
            if split_email[1].count(".")<1:
                message= "invalid email 4"
                
                
            elif split_email[1].count(".")>2:
                message= "invalid email 5"
                
            else:
                extension=split_email[1].split(".")
                if len(extension[1])<2 or len(extension[1])>3:
                    message= "invalid email 6"
                    
                    
                else:
                    message="valid email"
                    
print(message)