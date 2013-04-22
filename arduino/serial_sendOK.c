/*
* Echo Serial on the Arduino
* with advice from Mark Sproul
*/
char str[10]; 


void setup() {
  Serial.begin(9600);
  Serial.println("Start");
}

void loop() 
{
  //Node not receiving if there is a while (serial.available)
    delay(10);
    Serial.println("coucou"); 
}
