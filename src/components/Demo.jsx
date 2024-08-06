import React from "react";

const Demo = () => {
  return (
    <>
      <div className="d-flex flex-row justify-content-end align-items-center shadow-sm">
        <h2 className="p-4">Ad Service</h2>
      </div>
      <div className="d-flex flex-row" style={{ width: "100%" }}>
        <div
          style={{
            width: "70%",
            height: "70vh",
          }}
          className="pt-3 px-4"
        >
          <iframe
            style={{ height: "100%", width: "90%" }}
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="duck"
          ></iframe>
        </div>
        <div style={{ width: "30%" }} className="pt-3">
          <h3>Advertisement</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            re tempor quis nulla eu tristique. Nulla interdum sapien tellus, ut
            condimentum purus dapibus eget. Vestibulum mollis eleifend sapien.
            Curabitur pulvinar condimentum est. Etiam et egestas dui, ac
            bibendum lacus. Donec eget ligula nec sem consectetur molestie sed
            nec ipsum. Nam feugiat, massa at ultrices finibus, tellus tellus
            sodales sapien, vitae facilisis ipsum est sit amet mauris. Curabitur
            venenatis finibus venenatis. Donec dapibus dui suscipit condimentum
            tincidunt. Sed enim mauris, feugiat et lorem nec, commodo
            scelerisque nisl. Ut ac convallis nulla, at scelerisque risus. Etiam
            tristique tortor id tellus mattis venenatis. Maecenas laoreet
            facilisis ullamcorper. Quisque molestie tempus vehicula. Etiam at
            rhoncus risus. Vestibulum ut arcu ut magna suscipit vehicula eget at
            ante. Nam convallis molestie augue nec condimentum. Duis eleifend
            feugiat ligula non condimentum. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Proin
            scelerisque libero non maximus venenatis. Donec convallis blandit
            scelerisque. Mauris ipsum nunc, eleifend ut laoreet in, interdum sed
            purus. Integer nec dignissim tellus. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nullam libero erat, interdum non mi
            tempus, dignissim tincidunt nulla. Praesent tellus nibh, tempor id
            quam at, dictum semper ante. eleifend ut laoreet in, interdum sed
            purus. Integer nec dignissim tellus. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nullam libero erat, interdum non mi
            tempus, dignissim tincidunt nulla. Praesent tellus nibh, tempor id
            quam at, dictum semper ante.
          </p>
        </div>
      </div>
    </>
  );
};

export default Demo;
