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
int ii = 0;
boolean keepgoing = true;

  while (Serial.available() ) 
    {
    delay(10);
    Serial.println("coucou\n");
    }
 

}
