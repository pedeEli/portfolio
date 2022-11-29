export const vertex = `#version 300 es

layout (location = 0) in vec3 aPos;
layout (location = 1) in vec2 aUV;

out vec2 pos;
out vec2 uv;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
    gl_Position = projection * view * model * vec4(aPos, 1.0);
    pos = aPos.xy;
    uv = aUV;
}`

export const fragment = `#version 300 es

precision mediump float;

in vec2 pos;
in vec2 uv;

out vec4 FragColor;

vec4 rime = vec4(0.07, 0.07, 0.07, 1.0);
float outer = 0.50;
float inner = 0.48;

uniform bool inside;
uniform bool hovering;
uniform sampler2D tex;

float map(float value, float min1, float max1, float min2, float max2)
{
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main()
{
    if (inside) {
        FragColor = rime;
        return;
    }

    vec4 color = texture(tex, uv);
    float x = abs(pos.x);
    float y = abs(pos.y);
    if (x > outer || y > outer) {
        color = rime;
    } else if (x > inner || y > inner) {
        float t = smoothstep(0.0, 1.0, map(max(x, y), outer, inner, 0.0, 1.0));
        vec4 texColor = texture(tex, uv);
        color = texColor * t + rime * (1.0 - t);
    }

    if (hovering) {
        FragColor = vec4(color.rgb - vec3(0.08), 1.0);
    } else {
        FragColor = color;
    }
}`