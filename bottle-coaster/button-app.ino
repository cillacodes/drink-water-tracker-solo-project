int button = D2;
int output = D3;
int buttonState;

void setup() {


    Particle.variable("buttonState", buttonState);

    pinMode(button, INPUT_PULLUP);
    pinMode(output, OUTPUT);

}

void loop() {

    buttonState = digitalRead(button);

    digitalWrite(output, LOW);

    if (buttonState == LOW) {
        digitalWrite(output, HIGH);
        Particle.publish("button pressed", "false");
        delay(500);
    }


}



int button = D2;
int output = D3;
int buttonState;

void setup() {


    Particle.variable("buttonState", buttonState);

    pinMode(button, INPUT_PULLUP);
    pinMode(output, OUTPUT);

}

void loop() {

    bool buttonState = digitalRead(button);

    digitalWrite(output, LOW);

    if (buttonState == LOW) {
        digitalWrite(output, HIGH);
        Particle.publish("button pressed", "false");
        delay(10000);
    } else {
        Particle.publish("button released", "true");
        delay(10000);
    }


}
