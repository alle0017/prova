namespace Settings{
      class User{
            //name of user
            static Name: string;
            //hour of playing
            static h: number;
            //dark mode
            static darkMode: number;
            constructor() {
                  if (settings.exists('name'))
                        User.Name = settings.readString('name');
                  else {
                        User.Name = game.askForString('What is your name?');
                        settings.writeString('name', User.Name);
                  }
                  if (settings.exists('h'))
                        User.h = settings.readNumber('h');
                  else {
                        User.h = 0;
                        settings.writeNumber('h', User.h);
                  }
                  if (settings.exists('dm'))
                        User.darkMode = settings.readNumber('dm');
                  else {
                        User.darkMode = 0;
                        settings.writeNumber('dm', User.darkMode);
                  }
            }
      }
}
