import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from 'cookie-parser'
import { ValidationPipe } from "@nestjs/common";



const start = async ()=>{
  try {
    const config = new DocumentBuilder()
    .setTitle('Stadium finder ')
    .setDescription('Mini project for stadium find')
    .setVersion('1.0.0')
    .addTag('Nodejs')
    .build();
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT ||3003
    const document =SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('/docs',app,document);
    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe())
    await app.listen(PORT,()=>{
      console.log(`Server ${PORT} -portda ishga tushdi`);
     })
  
  } catch (error) {
    console.log(error);
  }
}

start()
