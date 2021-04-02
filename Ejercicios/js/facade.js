// Estas son algunas de las clases de un framework de conversión
// de video de un tercero. No controlamos ese código, por lo que
// no podemos simplificarlo.

class VideoFile {

}

class OggCompressionCodec {

}

class MPEG4CompressionCodec {

}

class CodecFactory {

}

class BitrateReader {

}

class AudioMixer {

}


// Creamos una clase fachada para esconder la complejidad del
// framework tras una interfaz simple. Es una solución de
// equilibrio entre funcionalidad y simplicidad.
class VideoConverter {
  // Método de conversión
  convert(filename, format) {
    file = new VideoFile(filename);
    sourceCodec = new CodecFactory.extract(file);
    if (format == "mp4") {
      destinationCodec = new MPEG4CompressionCodec();
    }     
    else {
      destinationCodec = new OggCompressionCodec();
    }
    buffer = BitrateReader.read(filename, sourceCodec);
    result = BitrateReader.convert(buffer, destinationCodec);
    result = new AudioMixer().fix(result);
    return new File(result);
  }
}
    
// En este punto al ejecutar el método convert, no dependen de un millón de clases
// proporcionadas por el complejo framework.
convertor = new VideoConverter()
mp4 = convertor.convert("video_prueba.ogg", "mp4");
mp4.save()
