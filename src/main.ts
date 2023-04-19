import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder } from "@nestjs/swagger";
import { SwaggerModule } from "@nestjs/swagger/dist";

async function start (){
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
    .setTitle('Урок по продвинутому BACKEND')
    .setDescription('Описание')
    .setVersion('1.0.0')
    .addTag('Daniel')
    .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)    
    app.listen(PORT, ()=>{
        console.log(`Server started on port  = ${PORT}`);
        
    })
}

start()