<?php 
  //load xml source
  $xml = new DOMDocument;
  $xml->load('../files/AcousticAbsorptionTable.xml');

  //load our xsl source
  $xsl = new DOMDocument;
  $xsl->substituteEntities = true; //dont decode
  $xsl->load ('../files/AcousticAbsorptionTable.xsl');

  //configure the transformer
  $proc = new XSLTProcessor;
  $proc->importStyleSheet($xsl);
  
  // tranfor xml and see result
  echo $proc->transformToXml($xml);
  //prevent from redirect

?>